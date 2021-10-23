import { Container, Link } from "@material-ui/core";
import { API_TYPE_NAME } from "./AppName";
import { appUrl } from "../realm.json";

export function MoreInfo() {
  return (
    <>
      {API_TYPE_NAME === "GraphQL" ? <MoreInfoGraphiQL /> : null}
      <MoreInfoTemplateAndDocs />
    </>
  );
}

function MoreInfoItem({ children }) {
  return (
    <Container
      style={{ textAlign: "center", padding: "14px 0", marginTop: "auto" }}
    >
      {children}
    </Container>
  );
}

export function MoreInfoTemplateAndDocs() {
  return (
    <MoreInfoItem>
      Built by {API_TYPE_NAME} | w/ {" "}
      <Link target="_blank" href="https://docs.mongodb.com/realm">
        🌿 
      </Link>
    </MoreInfoItem>
  );
}

const graphiqlUrl = new URL('/graphql/explore', appUrl).href
function MoreInfoGraphiQL() {
  return (
    <MoreInfoItem>
      <span>
        Try some queries in the{" "}
        <Link target="_blank" href={graphiqlUrl}>
          GraphiQL Explorer
        </Link>
      </span>
    </MoreInfoItem>
  );
}
