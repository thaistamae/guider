import "../../assets/style/styles.css";

export function Home() {
  return (
    <div>
      <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-weight-bold">
                Explore e escolha o seu próximo destino
              </h1>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 mb-5">
                O Guider irá te ajudar a planejar a sua próxima experiência <br></br>
                Explore os locais mais incríveis e monte o seu plano de viagem
              </p>
              <a className="btn btn-primary btn-xl" href="#about">
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="page-section bg-primary" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">Comece a explorar!</h2>
              <hr className="divider divider-light" />
              <p className="text-white-75 mb-4">
                Procure o seu próximo destino e encontre todos os locais que você pode visitar.
                Defina os locais que farão parte da sua viagem, e depois disso é só embarcar!
              </p>
              <a className="btn btn-light btn-xl" href="#services">
                Comece Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="services">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center mt-0">Vantagens</h2>
          <hr className="divider" />
          <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-gem fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Destino</h3>
                <p className="text-muted mb-0">
                  Encontre diversos locais para incluir na sua viagem
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-laptop fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Planejamento</h3>
                <p className="text-muted mb-0">
                  Planeje toda a sua rota e locais que irá visitar
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-globe fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Na palma da mão</h3>
                <p className="text-muted mb-0">
                  Consulte facilmente todo o seu roteiro de viagem
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-heart fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Aproveite</h3>
                <p className="text-muted mb-0">
                  Tudo pronto e planejado, é só aproveitar!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
