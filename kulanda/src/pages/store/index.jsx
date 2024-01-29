import "./style.css"

import { usePublicStoreState } from "./state";

export const PublicStore = (props) => {
    const { } = usePublicStoreState(props);

    return (
        <div className="client-store">
            <div className="header-store">
                <div className="logo-container">
                    <h1>Mario Fashion</h1>
                </div>
                <div className="links-container">
                    <a href="#home">Inicio</a>
                    <a href="#products">Produtos</a>
                    <a href="#about">Sobre</a>
                </div>
            </div>
            <section id="home">
                <div className="box-yellow">
                    <h1 className="box-title-one">{`<<`}AQUI VOCÊ ENCONTRA TUDO{`>>`}</h1>
                    <h1 className="box-title-two">Compra e Vende Rápido</h1>
                    <h1 className="box-title-four">Loja Mario Fashion</h1>
                    <a href="/store/login/store_id" className="box-btn">Login</a>
                </div>
            </section>
            <section id="products">
                <div>
                    <span className="title-product">Produtos</span>
                </div>
                <div className="product-container">
                    <div className="product-card">
                        <div className="product-card-body">
                            <img src="" />
                        </div>
                        <div className="product-card-footer">
                            <label htmlFor=""><b>Nome: </b>Bolsa</label>
                            <label htmlFor=""><b>Preço: </b>2.000,00 AOA</label>
                        </div>
                        <button className="bay-button">Comprar</button>
                    </div>
                </div>
            </section>
            <section id="about">
                Somos uma loja muito interessada em mudar a sua vida da moda, para mais informações <br/> ligue: 944666640 / 999666640
            </section>
        </div>
    );
};
