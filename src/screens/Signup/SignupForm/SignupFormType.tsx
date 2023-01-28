import { form_fields_type } from "../SignupForms/SignupFormsType"

export type SignupFormType = {
    form: form_fields_type,
    is_last_form?: Boolean
    handle_change_field?: Function,
    handle_next_signup?: Function,
    handle_prev_signup?: Function,
    handle_validate_signup?: Function
}