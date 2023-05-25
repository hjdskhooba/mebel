import Card from "../../../components/Card/Card"
import "../../../scss/hitSale.scss"

const HitSale = () => {
  return (
    <div className="hitSale">
        <div className="container">
            <h2 className="hitSale__title">Хиты продаж</h2>
            <div className="hitSale__row">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    </div>
  )
}

export default HitSale