import {setChangeDataCallBack} from "./data/dataCounter.js";
import {renderCounter} from "./components/renderCounter.js";

renderCounter();
setChangeDataCallBack(renderCounter);