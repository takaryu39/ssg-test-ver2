import 'styles/globals.css'
import Layout from "components/Layout"
import {library} from '@fortawesome/fontawesome-svg-core'
import{faHouseChimney}  from "@fortawesome/free-solid-svg-icons"
import {faSun} from "@fortawesome/free-regular-svg-icons"
import { faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons"
import '@fortawesome/fontawesome-svg-core/styles.css'

library.autoAddCss = false
library.add(faTwitter,faFacebookF,faSun,faHouseChimney)

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}
export default MyApp