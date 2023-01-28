import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { QRCodeSVG } from "qrcode.react";
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "white",
    padding: 75,
  },
  viewer: {
    width: "100%", //the pdf viewer will take up all of the width and height
    height: "100%",
    position: "absolute",
    top: 85,
  },
  text: {
    color: "black",
    fontSize: 13,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    textAlign: "center",
    marginBottom: 30,
    textDecoration: "underline",
  },
  body: {
    marginBottom: 50,
  },
  footer: {
    textAlign: "right",
  },
});

// Create Document Component
function MyDocument() {
  return (
    <>
      {/* <PDFViewer showToolbar={false} style={styles.viewer}> */}
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.header}>
              <Text style={[styles.text]}>Madagascar</Text>
              <Text style={[styles.text]}>
                Province Antananarivo-Renivohitra
              </Text>
              <Text style={[styles.text]}>67ha Nord Est</Text>
              <Text style={[styles.text]}>Commune d'Antananarivo</Text>
            </View>
            <View style={styles.title}>
              <Text style={[styles.text]}>ATTESTATION DE RESIDENCE</Text>
            </View>
            <View style={styles.body}>
              <Text style={[styles.text]}>
                Je soussigné(e)
                .........................................................
                Bourgmestre de la commune
                .............................................., atteste par la
                presente qu'au vu des Documents ci-apres
                .............................................
              </Text>
              <Text style={[styles.text]}>
                Le (la) nommé(e) ..................................
              </Text>
              <Text style={[styles.text]}>
                Fils de .................................. et de
                ...............................
              </Text>
              <Text style={[styles.text]}>
                District de .................................. Province de
                ...............................
              </Text>
              <Text style={[styles.text]}>
                Actuellement a .................................. sur l'avenue
                (Rue) ...............................
              </Text>
              <Text style={[styles.text]}>
                Commune .................................. Quartier
                ...............................
              </Text>
            </View>
            <View style={styles.footer}>
              <Text style={[styles.text]}>
                Fait a Antananarivo le 28/01/2023
              </Text>
              <QRCodeSVG value="https://reactjs.org/" />
            </View>
          </Page>
        </Document>
      {/* </PDFViewer> */}
    </>
  );
}
export default MyDocument;
