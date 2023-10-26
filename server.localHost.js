import {hostPorts} from .js/.json/locale.json;
import {hostName} from .js/.json/locale.json;
import {path} from .js/.json/locale.json;
import {webappClient} from .js/.json/locale.json;
// import path from .js/.json/locale.json;
export default {
  hostPorts,
  hostName,
  path,
}; // Use script
const usercl = `${webappClient}`

function getPath() {
const { hostPorts, hostName, path } = all;
const url = `${hostName}:${hostPorts}${path}`;
console.log(usercl + "is running on" + url);
  return path; }