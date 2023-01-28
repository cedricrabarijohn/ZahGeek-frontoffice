import "./signup-forms.css";
import { useEffect, useState } from "react";
import SignupForm from "../SignupForm/SignupForm";
import { form_fields_type, SignupFormsType } from "./SignupFormsType";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const forms_mock: SignupFormsType = {
  email: {
    label: "Votre email",
    type: "string",
    is_current: true,
    value: "cedrictianarabarijohn@gmail.com",
  },
  lastname: {
    label: "Votre nom",
    type: "string",
    is_current: false,
    value: "Rabarijohn",
  },
  firstname: {
    label: "Votre prenom",
    type: "string",
    is_current: false,
    value: "Tiana Cedric",
  },
  birthday: {
    label: "Votre date de naissance",
    type: "string",
    is_current: false,
    value: "2002-02-20",
  },
  birth_location: {
    label: "Lieu de naissance",
    type: "string",
    is_current: false,
    value: "Soavinandriana",
  },
  dad_name: {
    label: "Nom complet du pere",
    type: "string",
    is_current: false,
    value: "Rabarijohn Hery Tiana",
  },
  mom_name: {
    label: "Nom complet de la mere",
    type: "string",
    is_current: false,
    value: "Rakotonarivo Noeline Fara Nirina",
  },
  address: {
    label: "Votre adresse",
    type: "string",
    is_current: false,
    value: "Lot 666 Ankazomanga",
  },
  identity_card_number: {
    label: "Numero du CIN",
    type: "string",
    is_current: false,
    value: "666666666",
  },
  identity_card_pdf: {
    label: "Fichier pdf du CIN",
    type: "pdf",
    is_current: false,
    value: "",
  },
  birth_certificate_pdf: {
    label: "Fichier pdf de l'acte de naissance",
    type: "pdf",
    is_current: false,
    value: "",
  },
  commune: {
    label: "Votre commune",
    type: "select",
    is_current: false,
    value: "2",
    options: [
      {
        label: "AMBATO",
        value: "1",
      },
      {
        label: "AMBATOLAMPY",
        value: "2",
      },
      {
        label: "AMBOHIDRATRIMO",
        value: "3",
      },
    ],
  },
  village: {
    label: "Votre village",
    type: "select",
    is_current: false,
    value: "1",
    options: [
      {
        label: "AMBATO",
        value: 1,
        CommuneId: 1,
      },
      {
        label: "AMBATOHARANANA",
        value: 2,
        CommuneId: 1,
      },
      {
        label: "AMBODIMANGA",
        value: 3,
        CommuneId: 1,
      },
      {
        label: "AMBOHIJORERY",
        value: 4,
        CommuneId: 1,
      },
      {
        label: "AMBOHIMITSINJORANO",
        value: 5,
        CommuneId: 1,
      },
      {
        label: "AMPANOTOKANA",
        value: 6,
        CommuneId: 1,
      },
      {
        label: "ANKADIBE",
        value: 7,
        CommuneId: 1,
      },
      {
        label: "ANKAFOTRA",
        value: 8,
        CommuneId: 1,
      },
      {
        label: "ANTANETIBE",
        value: 9,
        CommuneId: 1,
      },
      {
        label: "ANTSAHALAVA",
        value: 10,
        CommuneId: 1,
      },
      {
        label: "MIARAMASOANDRO",
        value: 11,
        CommuneId: 1,
      },
      {
        label: "MAHITSITADY",
        value: 12,
        CommuneId: 1,
      },
      {
        label: "SOALOKA",
        value: 13,
        CommuneId: 1,
      },
      {
        label: "VATOVANDANA",
        value: 14,
        CommuneId: 1,
      },
      {
        label: "AMBATOLAMPY",
        value: 15,
        CommuneId: 2,
      },
      {
        label: "AMBOHIDAVA",
        value: 16,
        CommuneId: 2,
      },
      {
        label: "AMBOHIMARINA",
        value: 17,
        CommuneId: 2,
      },
      {
        label: "ANJOMAKELY",
        value: 18,
        CommuneId: 2,
      },
      {
        label: "AVARAJOZORO",
        value: 19,
        CommuneId: 2,
      },
      {
        label: "AMBODIFASINA",
        value: 20,
        CommuneId: 2,
      },
      {
        label: "SOAVINARIVO",
        value: 21,
        CommuneId: 2,
      },
      {
        label: "AMBOHIDRATRIMO",
        value: 22,
        CommuneId: 3,
      },
      {
        label: "ANTSIMOMPARIHY",
        value: 23,
        CommuneId: 3,
      },
      {
        label: "SOAMANANETY",
        value: 24,
        CommuneId: 3,
      },
      {
        label: "AMBOHIDEHILAHY",
        value: 25,
        CommuneId: 3,
      },
      {
        label: "AMBOVO",
        value: 26,
        CommuneId: 3,
      },
      {
        label: "AMBOHITSIROA EST",
        value: 27,
        CommuneId: 3,
      },
      {
        label: "AMBODISAHA",
        value: 28,
        CommuneId: 3,
      },
      {
        label: "AMPANATAOVANA",
        value: 29,
        CommuneId: 3,
      },
      {
        label: "ANTOHIBE",
        value: 30,
        CommuneId: 3,
      },
    ],
  },
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  maxWidth: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const SignupForms = () => {
  const [forms, set_forms]: [SignupFormsType, any] = useState(forms_mock);
  const [open_modal, set_open_modal]: [boolean, any] = useState(false);

  useEffect(() => {
    set_forms(forms_mock);
  }, []);

  const handle_change_field = (form_key: string, new_form: any) => {
    let current_forms_list = { ...forms };
    current_forms_list[form_key] = { ...new_form };
    set_forms(current_forms_list);
  };
  const handle_prev_signup = (
    form_key: string,
    key_index: number,
    new_form: form_fields_type
  ) => {
    new_form.is_current = false;
    let current_forms_list = {
      ...forms,
      [form_key]: {
        ...new_form,
      },
    };
    const next_key = key_index - 1;
    const next_form_field_key = Object.keys(current_forms_list)[next_key];
    let next_form = {
      ...current_forms_list[next_form_field_key],
    };
    if (Object.keys(next_form).length > 0) {
      next_form.is_current = true;
      set_forms({
        ...current_forms_list,
        [next_form_field_key]: {
          ...next_form,
        },
      });
    } else {
    }
  };
  const handle_next_signup = (
    form_key: string,
    key_index: number,
    new_form: form_fields_type
  ) => {
    new_form.is_current = false;
    let current_forms_list = {
      ...forms,
      [form_key]: {
        ...new_form,
      },
    };
    const next_key = key_index + 1;
    const next_form_field_key = Object.keys(current_forms_list)[next_key];
    let next_form = {
      ...current_forms_list[next_form_field_key],
    };
    if (Object.keys(next_form).length > 0) {
      next_form.is_current = true;
      set_forms({
        ...current_forms_list,
        [next_form_field_key]: {
          ...next_form,
        },
      });
    } else {
    }
  };
  const handle_validate_signup = (
    form_key: string,
    new_form: form_fields_type
  ) => {
    let current_forms_list = {
      ...forms,
      [form_key]: {
        ...new_form,
      },
    };
    console.log(current_forms_list)
    set_forms(current_forms_list);
    set_open_modal(true);
  };
  const handle_close_success_modal = () => {
    window.location.href = "/signin";
    // set_open_modal(false);
  };
  return (
    <>
      {forms &&
        Object.keys(forms).map((form_key, key) => {
          const form = forms[form_key];
          if (form.is_current) {
            return (
              <div key={key}>
                <SignupForm
                  is_last_form={key === Object.keys(forms).length - 1}
                  handle_change_field={(new_form: form_fields_type) => {
                    handle_change_field(form_key, new_form);
                  }}
                  handle_next_signup={(new_form: form_fields_type) => {
                    handle_next_signup(form_key, key, new_form);
                  }}
                  handle_prev_signup={(new_form: form_fields_type) => {
                    handle_prev_signup(form_key, key, new_form);
                  }}
                  handle_validate_signup={(new_form: form_fields_type) => {
                    handle_validate_signup(form_key, new_form);
                  }}
                  form={{ ...form }}
                />
              </div>
            );
          } else {
            return <div key={key}></div>;
          }
        })}
      <div>
        <Modal
          open={open_modal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          onClose={() => handle_close_success_modal()}
        >
          <Box sx={style}>
            <Typography
              style={{
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              <CheckCircleIcon style={{ color: "green", marginRight: 20 }} />{" "}
              Inscription terminee
            </Typography>
            <br />
            <Typography style={{ paddingLeft: "11%" }}>
              Votre compte est en attente de validation.
              <br />
              Une fois validé, un mail vous sera envoyé à{" "}
              <span
                style={{
                  fontWeight: "bolder",
                  color: "green",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  overflowWrap: "break-word",
                  wordWrap: "break-word",
                  width: "100px",
                  height: "50px",
                }}
              >
                {forms.email.value}
              </span>
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
};
export default SignupForms;
