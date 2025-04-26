import { createGenericApiSlice } from "../createGenericSlice";

// Výsledek (objekt s vlastnostmi fetchData, reducer, slice) bude uložen do generatedSliceData.
const generatedSliceData = createGenericApiSlice({
  sliceName: "storage",
  apiEndpoint: "/api/list_storage/",
  // initialDataValue: [] // Volitelná počáteční hodnota (zde nenastavena, použije se výchozí prázdné pole)
});

const getStorage = generatedSliceData.fetchData;

const storageSlice = generatedSliceData.slice;

export { getStorage };
export default storageSlice;