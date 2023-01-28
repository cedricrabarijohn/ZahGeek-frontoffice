type FIELD_TYPES = "string" | "select";

type select_option_type = {
  value: any;
  label: string;
};
export type customized_form_fields_type = {
  label: string;
  type: FIELD_TYPES;
  value: any;
  note?: string;
  options?: Array<select_option_type>;
};
export type CustomizedFormType = {
  fields: {
    [x: string]: customized_form_fields_type;
  };
};
