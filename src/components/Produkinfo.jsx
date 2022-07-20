import TambahProduk from "./TambahProduk";
import CheckDiscount from "./CheckDiscount";

function ProdukInfo(props) {

    const {category, name, isDiscount} = props;
    const Benefits = ["Doesn't get tangled in water", "Softer Material", "Not Hot"]
    const listBenefits = Benefits.map((itemBenefit) => 
    <li>{itemBenefit}</li>)
  
    return (
      <div className="Deskripsi">
            <p className="Cate">{category}</p>
            <h1 className="Title">{name}</h1>
            <p className="Price">IDR 79.000.000</p>
            <CheckDiscount isDiscount={isDiscount} />
            <p className="Info">
            [Lightly moves freely]. Using high quality material, soft, and does not make the feet stuffy.
            </p>
            <ul>
              {listBenefits}
            </ul>

            <a onClick={(e) => TambahProduk(name, e)} href="#">Add To Cart</a>
          </div>
    )
  }

export default ProdukInfo;