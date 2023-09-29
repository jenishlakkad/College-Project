import { Col } from "react-bootstrap";
import { Heart, Search, Cgrid, Clist } from "../../styles/Svg";
import GridView from "./GridView";
import ListView from "./ListView";

const ListTitleCol = () => {
  return (
    <>
      <div>
        <div className="products-selection">
          <Col lg={2} md={2} sm={2} xs={3} className="d-inline-block">
            <ul className="nav" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <div
                  className="nav-link active"
                  id="juice-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#juice"
                  type="button"
                  role="tab"
                  aria-controls="juice"
                  aria-selected="true"
                >
                  <Cgrid />
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  id="fresh-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#fresh"
                  type="button"
                  role="tab"
                  aria-controls="fresh"
                  aria-selected="false"
                >
                  <Clist />
                </div>
              </li>
            </ul>
          </Col>
          <Col
            lg={4}
            md={4}
            sm={4}
            xs={9}
            className="d-inline-block  d-xl-inline-block totalProduct"
          >
            There Are 16 Products.
          </Col>
          {/* <Col lg={6} md={6} sm={6} xs={12} className="d-inline-block">
            <div className="sort-by text-end">
              <div className="sort">
                <select className="custom-select" id="inlineFormCustomSelect">
                  <option selected>Name, A to Z</option>
                  <option value="1">Best sellers</option>
                  <option value="2">Relevance</option>
                  <option value="3">Name, A to Z</option>
                  <option value="4">Name, Z to A</option>
                  <option value="5">Price, low to high</option>
                  <option value="6">Price, high to low</option>
                </select>
              </div>
            </div>
          </Col> */}
        </div>

        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="juice"
            role="tabpanel"
            aria-labelledby="juice-tab"
          >
            <GridView />
          </div>
          <div
            className="tab-pane fade"
            id="fresh"
            role="tabpanel"
            aria-labelledby="fresh-tab"
          >
            <ListView />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListTitleCol;
