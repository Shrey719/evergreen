import { baremuxPath } from "@mercuryworkshop/bare-mux/node";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import  express  from "express"

const app = express()


app.use("/baremux/", express.static(baremuxPath));
app.use("/epoxy/", express.static(epoxyPath));


app.use(express.static("dist"))

app.listen(8000, () => {console.log("on port 8000")})