import "./portfolioList.scss"

export default function PortfolioList({title, active, setSelected, category }) {
    return (
        <div>
            <li  className={active ? "portfolioList active" : "portfolioList" }
            onClick= {()=>setSelected(category)}
            >{title}</li>
            
        </div>
    )
}

