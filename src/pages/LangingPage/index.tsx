import MyParticles from "./components/Particles";

const LandingPage = () => {

  return (
    <>
      <MyParticles />
      <div style={{ display: "flex", position: "relative", justifyItems: "center", justifyContent: "center", width: '100vw', height: '100wh' }}>
        <h1>Witaj towarzyszu!  </h1>
        <h5>poklikaj particle</h5>
      </div>
    </>
  );
}

export default LandingPage;