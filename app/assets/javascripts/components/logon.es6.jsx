define(['react'], function(React){
  class Logon extends React.Component {
    render() {
      return <form>
        <input type="email" placeholder="Email" />
      </form>;
    }
  }

  return Logon;
})
