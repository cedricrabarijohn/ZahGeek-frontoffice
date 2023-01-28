type TYPES = "string" | "textarea" | "pdf" | "select" | "date" | "";

type select_option_type = {
  value: any,
  label: string
  [x:string]: any
}
export type form_fields_type = {
  label: string;
  type: TYPES;
  value: any;
  is_current: boolean;
  note?: string;
  options?: Array<select_option_type>
};
export type SignupFormsType = {
  [x: string]: form_fields_type;
};