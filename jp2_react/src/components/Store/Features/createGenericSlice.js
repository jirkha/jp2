import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/**
 * Vytvoří znovupoužitelný slice a async thunk pro načítání seznamu dat z API.
 * Funkce očekává objekt s následujícími vlastnostmi jako svůj jediný argument.
 *
 * @param {string} sliceName - Název pro slice a prefix pro typ akce thunku (např. "material").
 * @param {string} apiEndpoint - URL adresa API endpointu pro GET požadavek (např. "/api/list_items/").
 * @param {any[]} [initialDataValue=[]] - Volitelná počáteční hodnota pro pole 'data' (výchozí je prázdné pole). Typ by měl odpovídat očekávaným datům.
 *
 * @returns {{
 * fetchData: Function,
 * slice: object,
 * }} - Objekt obsahující vygenerovaný thunk (přejmenovaný na fetchData) a slice.
 */

export function createGenericApiSlice({
  sliceName,
  apiEndpoint,
  initialDataValue = [],
}) {

  const fetchData = createAsyncThunk(
    `${sliceName}/getData`,
    async (_, thunkAPI) => {
      try {
        const response = await axios.get(apiEndpoint);
        return response.data;
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

  const slice = createSlice({
    name: sliceName,
    initialState: {
      data: initialDataValue,
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchData.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchData.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
          state.error = null;
        })
        .addCase(fetchData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload || "Neznámá chyba při načítání dat";
        });
    },
  });

  return {
    fetchData: fetchData,
    slice: slice,
  };
}
