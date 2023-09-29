import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import latestbanner1 from "../../../public/assets/latestbanner-1.jpg";
import latestbanner2 from "../../../public/assets/latestbanner-2.jpg";
import latestbanner3 from "../../../public/assets/latestbanner-3.jpg";
import Link from "next/link";

const SaleBanner = () => {
  return (
    <>
      <div className="container saleBanner">
        <Row>
          <Col xl={5} lg={5} md={5}>
            <div className="posi-relative summerSale">
              <Image src={latestbanner1} alt="banner1" />
              <div className="bannerdes-leatest">
                <div className="banner-des-width-latest">
                  <h4 className=" text-white">Summer Sale</h4>
                  <h3 className=" text-white">LONGWEAR CONCEALER</h3>
                  <h2 className=" text-white">$32 off</h2>
                  <p>
                    <Link href="/ProductList/ProductList">
                      <a href="#">
                        <span>Shop Products</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={7} lg={7} md={7} className="latest-part-2">
            <div className="latest-banner-1 posi-relative">
              <Image src={latestbanner2} alt="banner1" />
              <div className="bannerdes-leatest">
                <div className="banner-des-width-latest">
                  <h5>Buy one Get One Free</h5>
                  <h3>Everything you need for </h3>
                  <h2>30% off</h2>
                  <p>
                    <Link href="/ProductList/ProductList">
                      <a href="#">
                        <span>Shop Products</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="posi-relative">
              <Image src={latestbanner3} alt="banner1" />
              <div className="bannerdes-leatest">
                <div className="banner-des-width-latest">
                  <h5>Big offer with small Price</h5>
                  <h3>Body Lotion</h3>
                  <h2>30% off</h2>
                  <p>
                    <Link href="/ProductList/ProductList">
                      <a href="#">
                        <span>Shop Products</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SaleBanner;
