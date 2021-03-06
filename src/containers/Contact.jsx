import React,{ Component } from 'react';
import Helmet from 'react-helmet'
import Spinner from 'react-loader-spinner'

import '../sass/main/contact.scss'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    this.setState({ status: "SUBMIT"})
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render(){
    const success = this.state.status === "SUCCESS"
    const submitted = this.state.status === "SUBMIT"
    return (
      <div className="contact-form">
        <Helmet>
          <title>kefuno. お問い合わせ</title>
        </Helmet>
        <h2 className="title">Contact</h2>
        <form 
          onSubmit={this.submitForm}
          action="https://formspree.io/f/xknpkrrp"
          method="POST"
        >
          <p>お名前</p>
          <input type='text' name='お名前' placeholder="佐藤　太郎" />
          <p>メールアドレス</p>
          <input type="email" name="返信先" placeholder="you@example.com"/>
            <p>件名</p>
            <input type='text' name='件名' />
          <p>お問い合わせ内容</p>
          <textarea name='お問い合わせ内容'></textarea>
          <div className="submit-div">
            <input className={success ? 'submit success' : submitted ? 'submit submitted' : 'submit'} type="submit" value={success ? 'Thank you!' : submitted ? "" :'Send'}/>
            { submitted ? <Spinner className="submit-spinner" type="TailSpin" color="#8d8f8f" height="70%"/> : null}
          </div>
        </form>
      </div>
    )
  }
}

export default Contact