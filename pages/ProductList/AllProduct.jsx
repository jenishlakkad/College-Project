import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import Chips from "../../public/assets/Category/3.png";
import ListTitleCol from "./ListTitleCol";
const AllProduct = () => {
  return (
    <>
      <div id="content-wrapper">
        <section id="main">
          <div className="block-category card card-block hidden-sm-down">
            <h2 className="h1 bh">
              <span>Chips</span>
            </h2>
            <Row>
              <Col xl={2} lg={3}>
                <div className="category-cover">
                  <Image src={Chips} alt="banner1" />
                </div>
              </Col>
              <Col xl={10} lg={9}>
                <div id="category-description" className="text-muted">
                  <p>
                    Lorem ipsum dolor sit amet, mel paulo sonet lateinische
                    Anzeige, vis te ridens oporteat, tale ipsum facilis pro ei.
                    Utamur Deterruisset ea Meer. Ferri scriptorem concludaturque
                    ne his, te nostrud patrioque eos,scriptorem concludaturque
                    ne his, te nostrud patrioque eos, nam no laudem epicuri
                    persequeris. 
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <ListTitleCol/>
      </div>
    </>
  );
};

export default AllProduct;
