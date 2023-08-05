import React, {useState, useEffect, useField} from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from 'axios'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import TextField from "../Global/Textfield"
import SelectArrayWrapper from '../Global/Select/SelectArrayWrapper';
import SelectWrapper from '../Global/Select/SelectWrapper';
import { useDispatch, useSelector } from "react-redux";
import { getMaterial } from "../Store/Features/Material/materialSlice";
import { getMaterialType } from '../Store/Features/Material/materialTypeSlice';
import AddItemTypeForm from './AddItemTypeForm'
import Notification from '../Global/Notifications/Notification';

import { 
  Typography,
  Grid,
  Box,
  Button,
  InputAdornment,
  FormControl,
} from "@mui/material";
import { Popup2 } from "../Global/Other/Popup2";


const AddItemForm = (props) => {
  
const dispatch = useDispatch();
const materialType = useSelector((state) => state.materialType.data)
const item = props.item
const [notify, setNotify] = useState({isOpen: false, message: '', type: ''})
const { setOpenPopup, getMaterialDetail } = props;
const [openPopup2, setOpenPopup2] = useState(false);
    
useEffect(() => {
  dispatch(getMaterialType());
  console.log("item",item)
}, [SelectArrayWrapper]);

  const handleClose = () => {
    setOpenPopup2(false);
  };


//const re = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm
const re = /^\d+(\.\d{1,2})?$/;

  const validationSchema = Yup.object({
    itemType: Yup.string().required("Prosím vyberte kategorii materiálu"), //.oneOf(itemType),
    name: Yup.string().required("Prosím zadejte název položky"),
    costs: Yup.string()
      .required(
        "Prosím zadejte cenu položky (minimálně 0 a maximálně 1 000 000 000 Kč)"
      )
      .matches(re, "Pouze dvě desetinná místa oddělená tečkou!"),
    unit: Yup.string().required("Prosím vyberte jednotku"),
    supplier: Yup.string(),
    //link: Yup.string().matches(re,'Zadejte prosím platný odkaz'),
    link: Yup.string(),
    note: Yup.string(),
  });

  const initialValues = {
    name: item?.name ?? "",
    itemType: item?.type?.id ?? "",
    image: item?.image ?? "",
    costs: item?.costs ?? 0,
    unit: item?.unit ?? "",
    supplier: item?.supplier ?? "",
    link: item?.link ?? "",
    note: item?.note ?? "",
  };

  const navigate = useNavigate();

  const onSubmit = (values) => {

        let formdata = new FormData();
        formdata.append("image", values.image);
        formdata.append("name", values.name);
        formdata.append("itemType", values.itemType);
        formdata.append("costs", values.costs);
        formdata.append("unit", values.unit);
        formdata.append("supplier", values.supplier);
        formdata.append("link", values.link);
        formdata.append("note", values.note);

    if (item) {
    Axios.put(`/api/item_update/${item.id}/`,
      formdata, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
    .then(res => {
        console.log("Updating Item: ", res);
        dispatch(getMaterial()); //aktualizuje seznam materiálu
        dispatch(getMaterialType());
        getMaterialDetail();
        setNotify({
                  isOpen: true,
                  message: `Materiál ${res.name} byl úspěšně upraven`,
                  type: 'success'
                })
    }).catch(err => console.log(err))
  }

  else {
  Axios.post("/api/item_add/", formdata, {
    headers: {
      "content-type": "multipart/form-data",
    }
  },)
    .then((res) => {
      console.log("Adding Item: ", res);
      dispatch(getMaterial()); //aktualizuje seznam materiálu
      dispatch(getMaterialType());
      setNotify({
        isOpen: true,
        message: "Nový materiál byl úspěšně vložen",
        type: "success",
      });
    })
    .catch((err) => console.log(err));
  }
}

//   const productOptions = itemType.map((opt, index) => (<option key={index} value={opt.id}>
//  {opt.name}
//  </option>
// ));

  // const renderError = (message) => <p style={errorStyle}>{message}</p>;

  const optionsUnit = {
  "ks": "ks",
  "g": "g",
  "kg": "kg",
  "l": "l",
  "ml": "ml",
  };
  

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          await onSubmit(values);
          resetForm();
          //navigate('/');
        }}
      >
        {({ isValid, setFieldValue, values }) => (
          <Form>
            <Box sx={{ flexWrap: "wrap" }}>
              <Grid
                container
                spacing={1}
                // justifyContent="center"
                //direction="column"
                maxWidth="430px"
                alignItems="flex-start"
              >
                {/* <JPLabel className="label" htmlFor="name">
            </JPLabel> */}
                <Grid item xs={12}>
                  <Typography
                    variant="subtitle2"
                    //color="textPrimary"
                    //align="center" //zarovná doprostřed
                    gutterBottom //vytvoří mezeru pod textem
                  >
                    Povinné údaje
                  </Typography>
                  <TextField
                    id="name"
                    name="name"
                    label="Název"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={10}>
                  <SelectArrayWrapper
                    name="itemType"
                    // size="small"
                    label="Kategorie materiálu ..."
                    options={materialType}
                    required
                  ></SelectArrayWrapper>
                </Grid>
                <Grid item xs={2}>
                  <Button
                    sx={{ height: "55px", maxWidth: "10px" }}
                    variant="outlined"
                    size="inherit"
                    color="primary"
                    onClick={() => setOpenPopup2(true)}
                  >
                    <AddOutlinedIcon />
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="costs"
                    name="costs"
                    // size="small"
                    label="Cena materiálu (za kus/jednotku)"
                    helperText="Haléře oddělujte tečkou"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">Kč</InputAdornment>
                      ),
                    }}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth required>
                    <SelectWrapper
                      //id="unit"
                      name="unit"
                      //value={unit}
                      label="Jednotka"
                      options={optionsUnit}
                    ></SelectWrapper>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="subtitle2"
                    //color="textPrimary"
                    //align="center" //zarovná doprostřed
                    gutterBottom //vytvoří mezeru pod textem
                  >
                    Nepovinné údaje
                  </Typography>
                  <Typography variant="body2">Fotografie produktu</Typography>
                  <Button variant="outlined" component="label" size="small">
                    {values.image ? "Upravit fotografii" : "Vložit fotografii"}
                    <input
                      type="file"
                      name="image"
                      onChange={(event) => {
                        //setFieldValue("image", Array.from(event.target.files));
                        setFieldValue("image", event.target.files[0]);
                      }}
                      hidden
                    />
                  </Button>
                  {values.image && (
                    <Typography variant="caption" display="block" gutterBottom>
                      {values.image.name ? values.image.name : values.image}
                    </Typography>
                  )}
                  <TextField
                    id="supplier"
                    name="supplier"
                    label="Dodavatel / Obchod"
                    variant="outlined"
                    sx={{ mt: 2 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="link"
                    name="link"
                    label="Odkaz na materiál"
                    helperText="Zadejte prosím platný odkaz"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="note"
                    name="note"
                    label="Poznámka"
                    multiline
                    rows={6}
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12}>
                  {/* <Link to="#itemList"> */}
                  <Button
                    type="submit"
                    className="button"
                    variant="contained"
                    onClick={() => isValid && setOpenPopup(false)}
                  >
                    {item ? "Změnit" : "Přidat"}
                  </Button>
                  {/* </Link> */}
                </Grid>

              </Grid>
            </Box>
          </Form>
        )}
      </Formik>
      <Popup2
        title="Vložení kategorie materiálu"
        openPopup2={openPopup2}
        setOpenPopup2={setOpenPopup2}
      >
        <AddItemTypeForm handleClose={handleClose} />
      </Popup2>
      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
};
export default AddItemForm