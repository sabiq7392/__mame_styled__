const debug = (props: { debug?: true }) => ({
  border: props.debug && "1px solid red!important",
});
export default debug;
