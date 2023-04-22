import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function FarmaciasApp({ dadosFormulario }) {
  const position = [-27.597502435558525, -48.54972353282047];

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="mt-4"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {Object.keys(dadosFormulario).map((indexEmpresa) => {
        const empresa = dadosFormulario[indexEmpresa];
        if (empresa.inputLatitude && empresa.inputLongitude) {
          return (
            <Marker position={[empresa.inputLatitude, empresa.inputLongitude]}>
              <Popup>
                <b>Razão Social:</b> {empresa.inputRazaoSocial} <br />
                <b>CNPJ:</b> {empresa.inputCNPJ} <br />
                <b>Nome Fantasia:</b> {empresa.inputNomeFantasia} <br />
                <b>Email:</b> {empresa.inputEmail} <br />
                <b>Telefone:</b> {empresa.inputTelefone} <br />
                <b>Celular:</b> {empresa.inputCelular} <br />
              </Popup>
            </Marker>
          );
        }
      })}
    </MapContainer>
  );
}
