import Common from "../Common";
import { pipe } from "../../js/utils/fp";

pipe(
  () => new Common(),
  () => import("../../js/pages/main/index"),
)();
