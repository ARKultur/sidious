import React, { useEffect } from "react";
import NavBar from "../component/NavBar";
import FooterComponent from "../component/Footer";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import GuideModal from "../component/guide/GuideModal";
import { getMarkers } from "../API/Marker";

export default function GuideView()
{
    // const {
    //     token,
    // } = React.useContext(AuthContext);

    // Guide
    const [showGuideModal, setShowGuideModal] = React.useState(false);
    const [guide, setGuide] = React.useState(undefined);
    const [address, setAddress] = React.useState(undefined);
    const [nodes, setNodes] = React.useState([]);

    function handleShowGuideModal(node) {
        console.log(node)
        if (node.guide && node.guide[0]) {
            setGuide(node.guide[0]);
            setAddress(node.adresses_nodes_addressIdToadresses);
            setShowGuideModal(true);
        }
    };
    function handleCloseGuideModal() {
        setShowGuideModal(false);
    };

    async function initMarkers() {
        const result = await getMarkers();

        setNodes(result);
    }

    useEffect(() => {
        initMarkers();
    }, [])

    return (
        <>
            <NavBar/>
            <div>
                <MapContainer center={[45.763210649627446, 4.82241931165369]} zoom={13} scrollWheelZoom={true} style={{zIndex: 1}}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {nodes && nodes.map((node) =>
                        <Marker key={node.latitude + node.longitude} position={[node.latitude, node.longitude]} eventHandlers={{
                            click: (e) => {
                                handleShowGuideModal(node)
                            },
                        }}>
                        </Marker>
                    )}
                </MapContainer>
                <GuideModal
                    onClose={handleCloseGuideModal}
                    isActive={showGuideModal}
                    style={{zIndex: 10, position: 'fixed'}}
                    guide={guide}
                    address={address}
                />
            </div>
            <FooterComponent/>
        </>
    )
}
