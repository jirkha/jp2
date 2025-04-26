import { createGenericApiSlice } from "../createGenericSlice";

// Výsledek (objekt s vlastnostmi fetchData, reducer, slice) bude uložen do generatedSliceData.
const generatedSliceData = createGenericApiSlice({
  sliceName: "materialType",
  apiEndpoint: "/api/item_types/",
  // initialDataValue: [] // Volitelná počáteční hodnota (zde nenastavena, použije se výchozí prázdné pole)
});

const getMaterialType = generatedSliceData.fetchData;

const materialTypeSlice = generatedSliceData.slice;

export { getMaterialType };
export default materialTypeSlice;
