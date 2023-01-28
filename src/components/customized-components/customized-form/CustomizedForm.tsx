import { Select } from "@material-ui/core";
import { Button, MenuItem } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import "./customized-form.css";
import { CustomizedFormType } from "./CustomizedFormType";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CustomizedForm = (props: CustomizedFormType) => {
  const [fields, set_fields] = useState({ ...props.fields });
  useEffect(() => {
    set_fields({ ...props.fields });
  }, [props]);

  return (
    <>
      <div className="new-request-form">
        {fields &&
          Object.keys(fields).map((field_key, key) => {
            const field = fields[field_key];
            const field_type = field.type;
            return (
              <div key={key} className="new-request-form-field">
                <div className="new-request-form-label">{field.label} :</div>
                <div className="new-request-form-input">
                  {field_type === "select" && (
                    <>
                      <Select
                        defaultValue="1"
                        style={{
                          height: 50,
                          backgroundColor: "transparent",
                          color: "white",
                          fontSize: "15px",
                        }}
                      >
                        {field.options &&
                          field.options.map((option, key) => {
                            return (
                              <MenuItem key={key} value={option.value}>
                                {option.label}
                              </MenuItem>
                            );
                          })}
                      </Select>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        <div className="send-request-button">
          <Button
            color="success"
            sx={{ border: "1px solid green" }}
            startIcon={<CheckCircleIcon />}
          >
            Envoyer la demande
          </Button>
        </div>
      </div>
    </>
  );
};
export default CustomizedForm;
