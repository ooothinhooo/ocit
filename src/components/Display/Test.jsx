import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    Text,
    Code,
    aside,
    note,
    pre,
    ul,
    ol,
    info,
    warning,
    success,
    danger,
    create,
} from '../../styles-components';
import { getAuth, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

import { authentication } from '../../firebase.config';
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';
import { app } from '../../firebase.config.js';
function Test() {
    const [contentTab1, setContentTab1] = useState('');
    const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
    let tab1 = './contents.md';
    useEffect(() => {
        fetch(tab1)
            .then((res) => res.text())
            .then((text) => setContentTab1(text));
    }, []);
    const firebaseAuth = getAuth(app);
    const signInWithFacebook = async () => {
        const provider = new GithubAuthProvider();
        // signInWithPopup(authentication, provider)
        const { user } = await signInWithPopup(firebaseAuth, provider);
        const { refreshToken, providerData } = user;
        localStorage.setItem('user', JSON.stringify(providerData[0]));
        dispatch({
            type: actionType.SET_USER,
            user: providerData[0],
        });
        // .then((re) => {
        //     // console.log(re);
        //     const user = re.user;
        //     console.log(user.email);
        // })
        // .catch((err) => {
        //     console.log(err.message);
        // });
        console.log(user);
    };
    return (
        <div>
            <div>
                <button type="button" onClick={signInWithFacebook}>
                    Sign in
                </button>
            </div>
            <img src="https://lh3.googleusercontent.com/a-/ACNPEu91mDaPk1btJWORfRvd_fOkAQ1R4YTpTGeF8rlFeA=s96-c" />
            <>
                {/*             
            <div className="text-white">
                <Markdown
                    options={{
                        overrides: {
                            h1: { component: H1 },
                            h2: { component: H2 },
                            h3: { component: H3 },
                            h4: { component: H4 },
                            h5: { component: H5 },
                            h6: { component: H6 },
                            Text: { component: Text },
                            Code: { component: Code },
                            aside: { component: aside },
                            note: { component: note },
                            pre: { component: pre },
                            info: { component: info },
                            danger: { component: danger },
                            success: { component: success },
                            warning: { component: warning },
                            create: { component: create },
                            ul: { component: ul },
                            ol: { component: ol },
                        },
                    }}
                >
                    {contentTab1}
                   
                </Markdown>
                <div
                    dangerouslySetInnerHTML={{
                        __html: '<script>alert(document.cookie);</script>',
                    }}
                />
            </div> */}
            </>
        </div>
    );
}

export default Test;
