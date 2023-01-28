import { Button, Select } from "@material-ui/core";
import { Typewriter } from "react-simple-typewriter";
import { SignupFormType } from "./SignupFormType";
import StartIcon from "@mui/icons-material/Start";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useEffect, useState } from "react";
import "./signup-form.css";
import { form_fields_type } from "../SignupForms/SignupFormsType";
import { Input, MenuItem } from "@mui/material";
import "aos/dist/aos.css";

const SignupForm = (props: SignupFormType) => {
  const [form, set_form]: [form_fields_type, any] = useState(props.form);

  const handle_change_field = (new_value: any) => {
    let new_form = { ...form };
    new_form.value = new_value;
    set_form({
      ...new_form,
    });
    if (props.handle_change_field) {
      props.handle_change_field(new_form);
    }
  };
  const handle_previous_signup = () => {
    const new_form = { ...form };
    set_form({
      ...new_form,
    });
    if (props.handle_prev_signup) {
      props.handle_prev_signup(new_form);
    }
  };

  const handle_next_signup = () => {
    const new_form = { ...form };
    set_form({
      ...new_form,
    });
    if (props.handle_next_signup) {
      props.handle_next_signup(new_form);
    }
  };
  const handle_validate_forms = () => {
    const new_form = { ...form };
    set_form({
      ...new_form,
    });
    if (props.handle_validate_signup) {
      props.handle_validate_signup(new_form);
    }
  };
  useEffect(() => {
    set_form(props.form);
  }, [props]);

  useEffect(() => {
    const handle_key_down = (event: any) => {
      if (event.key === "Enter") {
        handle_next_signup();
      }
    };
    document.addEventListener("keydown", handle_key_down);
    return () => {
      document.removeEventListener("keydown", handle_key_down);
    };
  }, []);
  return (
    <div
      className={`signup-form-wrapper`}
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="signup-form">
        <div className="signup-form-label">
          <Typewriter words={[form.label]} typeSpeed={50} />
        </div>
        <div>
          {form.type === "string" && (
            <Input
              className="signup-form-field"
              style={{
                color: "rgb(158, 158, 158)",
                fontWeight: "lighter",
                border: "0px solid grey",
              }}
              onChange={(e: any) => {
                const value = e.target.value;
                handle_change_field(value);
              }}
              spellCheck={false}
              type="text"
              value={form.value}
              autoFocus
            />
          )}
          {form.type === "select" && (
            <Select
              className="signup-form-field"
              value={form.value}
              onChange={(e: any) => {
                const value = e.target.value;
                handle_change_field(value);
              }}
              style={{
                height: 50,
                backgroundColor: "transparent",
                color: "white",
                fontSize: "15px",
              }}
            >
              {form.options &&
                form.options.map((opt, key: any) => {
                  return (
                    <MenuItem value={opt.value} key={key}>
                      {opt.label}
                    </MenuItem>
                  );
                })}
            </Select>
          )}
          {form.type === "pdf" && (
            <Input
              style={{
                color: "white",
              }}
              className="signup-form-field"
              type="file"
              onChange={(e) => {
                const value = e.target.value;
                handle_change_field(value);
              }}
            />
          )}
        </div>
      </div>
      <div className="next-form">
        <Button
          onClick={() => {
            handle_previous_signup();
          }}
          startIcon={<SkipPreviousIcon />}
          style={{ color: "yellow", fontWeight: "bolder", fontSize: 13 }}
        >
          Retour
        </Button>

        {props.is_last_form ? (
          <Button
            onClick={() => {
              handle_validate_forms();
            }}
            endIcon={<CheckCircleIcon />}
            style={{ color: "green", fontWeight: "bolder", fontSize: 13 }}
          >
            Terminer
          </Button>
        ) : (
          <Button
            onClick={() => {
              handle_next_signup();
            }}
            endIcon={<StartIcon />}
            style={{ color: "green", fontWeight: "bolder", fontSize: 13 }}
          >
            Suivant
          </Button>
        )}
      </div>
    </div>
  );
};

export default SignupForm;
