import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
import { Hit} from "./components/Hit";
import {
    InstantSearch,
    Configure,
    Hits,
    SearchBox,
    DynamicWidgets,
    RefinementList,
    Pagination,
  } from 'react-instantsearch-dom';

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
    server: {
        apiKey: '', // Be sure to use the search-only-api-key
        nodes: [
            {
                host: '',
                port: 8108,
                protocol: "http"
            }
        ]
    },
    // The following parameters are directly passed to Typesense's search API endpoint.
    //  So you can pass any parameters supported by the search endpoint below.
    //  queryBy is required.
    additionalSearchParameters: {
        query_by: "name"
    }
});
const searchClient = typesenseInstantsearchAdapter.searchClient;

function App() {

    return (
        <InstantSearch searchClient={searchClient} indexName="users">
            <Configure hitsPerPage={8} />
            <div>
                <div>
                    <DynamicWidgets fallbackWidget={RefinementList}></DynamicWidgets>
                </div>

                <div >
                    <SearchBox
                        className="searchbox"
                        translations={{
                            placeholder: '',
                        }}
                    />
                    <Hits hitComponent={Hit} />

                    <div>
                        <Pagination />
                    </div>
                </div>
            </div>
        </InstantSearch>
    )
}

export default App