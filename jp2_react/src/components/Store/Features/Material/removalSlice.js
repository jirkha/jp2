import { createGenericApiSlice } from "../createGenericSlice";

// Výsledek (objekt s vlastnostmi fetchData, reducer, slice) bude uložen do generatedSliceData.
const generatedSliceData = createGenericApiSlice({
  sliceName: "removal",
  apiEndpoint: "/api/list_removal/",
  // initialDataValue: [] // Volitelná počáteční hodnota (zde nenastavena, použije se výchozí prázdné pole)
});

const getRemoval = generatedSliceData.fetchData;

const removalSlice = generatedSliceData.slice;

export { getRemoval };
export default removalSlice;
