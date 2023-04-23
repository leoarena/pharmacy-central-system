import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useContext } from "react";
import { DadosContext } from "../contexts/DadosContext";

export default function FarmaciasApp() {
  const { empresasLocalStorage } = useContext(DadosContext);
  const position = [-27.597502435558525, -48.54972353282047];

  return empresasLocalStorage === null ? (
    <span className="mt-5">Nenhuma fármacia cadastrada ainda...</span>
  ) : (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="mt-4"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {Object.keys(empresasLocalStorage).map((indexEmpresa) => {
        const empresa = empresasLocalStorage[indexEmpresa];
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
