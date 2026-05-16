// stores データローダー
// stores.json を読み込み、defaults を各店舗にマージして返す。
// 各店舗で個別に値を持っていればそちらを優先（上書き可能）。
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const raw = JSON.parse(
  readFileSync(join(__dirname, "stores.source.json"), "utf-8")
);

const { domain, defaults, stores } = raw;

const merged = stores.map((store) => ({
  // defaults を先に展開し、店舗個別値で上書き
  ...defaults,
  ...store,
}));

export default {
  domain,
  defaults,
  stores: merged,
};
