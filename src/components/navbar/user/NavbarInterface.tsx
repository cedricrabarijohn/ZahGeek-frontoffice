export interface NavbarInterface {
    link_name: string;
    link_href: string;
    onClick?: Function;
    is_current?:boolean;
    link_style?: any
}