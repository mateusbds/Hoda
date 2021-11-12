import { webPageHoc } from "../src/foundation/webPageHoc";
import { HomePage } from "../src/pages/Home";

export default webPageHoc(HomePage, { webPageProps: { title: "Hoda" } });
