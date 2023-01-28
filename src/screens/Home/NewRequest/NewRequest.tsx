import CustomizedForm from "../../../components/customized-components/customized-form/CustomizedForm";
import "./new-request.css";
const NewRequest = () => {
  return (
    <>
      <div className="new-request-wrapper">
        <div className="new-request-title">
          <h1>Nouvelle demande de document</h1>
          <div style={{ color: "grey" }}>
            Faites une demande de document en remplissant le formulaire
            ci-dessous.
          </div>
        </div>
        <div className="new-request-form">
          <CustomizedForm
            fields={{
              document_type: {
                label: "Type de document",
                type: "select",
                value: "",
                options: [
                  {
                    label: "Acte de naissance",
                    value: "1",
                  },
                  {
                    label: "Bulletin de naissance",
                    value: "2",
                  },
                  {
                    label: "Certificat de residence",
                    value: "3",
                  },
                  {
                    label: "Impots non payes",
                    value: "4",
                  },
                ],
              },
              priority_type: {
                label: "Type de priorite",
                type: "select",
                value: "",
                options: [
                  {
                    label: "Normal",
                    value: "1",
                  },
                  {
                    label: "Urgent",
                    value: "2",
                  },
                ],
              },
            }}
          />
        </div>
      </div>
    </>
  );
};
export default NewRequest;
