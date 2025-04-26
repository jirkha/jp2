import { createGenericApiSlice } from '../createGenericSlice';

// Výsledek (objekt s vlastnostmi fetchData, reducer, slice) bude uložen do generatedSliceData.
const generatedSliceData = createGenericApiSlice({
  sliceName: 'material',
  apiEndpoint: '/api/list_items/',
  // initialDataValue: [] // Volitelná počáteční hodnota (zde nenastavena, použije se výchozí prázdné pole)
});

const getMaterial = generatedSliceData.fetchData;

const materialSlice = generatedSliceData.slice;

export { getMaterial };
export default materialSlice;