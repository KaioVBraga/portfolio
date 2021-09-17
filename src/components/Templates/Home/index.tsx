import { Container } from "./styles";

const TemplateHome: React.FC = (props) => {
  return (
    <Container>
      <section>
        {props?.children?.slice(0, (props?.children?.length || 0) - 1)}
        {props.children[props.children.length - 1]}
      </section>
    </Container>
  );
};

export default TemplateHome;
