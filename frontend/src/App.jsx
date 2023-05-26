import algoliasearch from "algoliasearch/lite";
import { Hit } from "./components/Hit";
import {
  InstantSearch,
  Configure,
  Hits,
  SearchBox,
  DynamicWidgets,
  RefinementList,
  Pagination,
} from "react-instantsearch-dom";

const appID = process.env.ALGOLIA_APP_ID;
const apiKey = process.env.ALGOLIA_API_KEY;

const searchClient = algoliasearch(apiID, apiKey);

function App() {
  return (
    <InstantSearch searchClient={searchClient} indexName="redplanet_users">
      <Configure hitsPerPage={9} />
      <div className="font-roboto">
        <div>
          <DynamicWidgets fallbackWidget={RefinementList}></DynamicWidgets>
        </div>

        <div className="m-4">
          <SearchBox
            className="searchbox"
            translations={{
              placeholder: "Benito Camelas....",
            }}
          />
          <Hits hitComponent={Hit} />

          <div>
            <Pagination />
          </div>
        </div>
      </div>
    </InstantSearch>
  );
}

export default App;
