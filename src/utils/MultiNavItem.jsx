import { Link } from "react-router-dom";

export default function MultiNav({name="", option=[{name:"", url:""}], active=false}) {
    console.log(window.location.pathname);
     
  return (
      <ul className="flex space-x-6">
        <li className="relative group">
          <button
            className="uppercase font-semibold"
          >
            {name}
        <div className={`w-0 h-0.5 bg-primary group-child ${active && "w-full"} duration-200`}></div>
          </button>
            <ul
              className="absolute z-50 opacity-0 w-48 bg-primary text-white h-0 group-hover:h-20 overflow-hidden group-hover:opacity-100 duration-300 left-0 mt-2 shadow-lg"
            >
                {option.map((item,idx)=>
                 <li key={idx} className="px-4 relative group-2 py-2 cursor-pointer"><Link to={item.url}>
                 {item.name}
                 </Link>
        <div className={`w-0 h-0.5 bg-white group-child ${window.location.pathname===item.url && "w-full"  } duration-200`}></div>
            
                 </li>
                )}
            </ul>
        </li>
      </ul>
  );
}
