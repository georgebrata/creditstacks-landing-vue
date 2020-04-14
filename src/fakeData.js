// todo: fetch from API

export const landing1 = {
    title: 'CreditStacks',
    logoUrl: 'https://landing.creditstacks.com/wp-content/uploads/2020/03/logo.svg',
    infoImageUrl: 'https://landing.creditstacks.com/wp-content/themes/creditstacks/img/banks_1.svg',
    cardImageUrl: 'https://landing.creditstacks.com/wp-content/themes/creditstacks/img/xcard_2.png.pagespeed.ic.6SF3DYu9f_.webp',
    nav: {
        // todo: if defined above, use {logoUrl}, {name}, {infoImageUrl}, {cardImageUrl} for dynamic content in header/footer
        html: ``, //rawHTML in header, if needed
        hidden: false
    },
    heroImageUrl: 'https://landing.creditstacks.com/wp-content/uploads/2020/03/xcodearea.png.pagespeed.ic.Acj0mG5yWY.webp',
    c2aLink: 'https://www.creditstacks.com/user/register?type=email&',
    c2aLinkTitle: 'Sign Up',
    c2aTitle: "Let's get started by creating your account login!",
    footerLogoUrl: '',
    footerImageUrl: '',
    footerLinks: [
        {
            title: 'Privacy Policy',
            href: 'https://creditstacks.box.com/s/8h37dlwgej46wa5s9f7iuezaj1ibfaai',
            doFollow: false,
            hidden: false,
        },
        {
            title: 'Cardholder Agreement',
            href: 'https://creditstacks.box.com/s/c1atkldu3o4k273n3jmvpu8gt4kxbxoz',
            doFollow: false,
            hidden: false,
        },
        {
            title: 'Privacy Notice',
            href: 'https://creditstacks.box.com/s/u86ld8xbtxt9hf2v7jcds92mwln6ijaa',
            doFollow: false,
            hidden: false,
        },
        {
            title: 'E-Sign Consent Agreement',
            href: 'https://creditstacks.box.com/s/q3d9420yfhqo7tlxgtlpgkv8t3pecqz9',
            doFollow: false,
            hidden: false,
        },
        {
            title: 'Terms of Use',
            href: 'https://creditstacks.box.com/s/lz80qkba94mflpn4giu7bbi1p2za7qbl',
            doFollow: false,
            hidden: false,
        },
        {
            title: 'Free Schedule',
            href: 'https://creditstacks.box.com/s/tfuosmw0glk6axlgxic2lyg5o4mgd2tx',
            doFollow: false,
            hidden: false,
        }
    ],
    footerTexts: [
        {
            titleHtml: '',
            textHtml: '© Mastercard. Mastercard is a registered trademark and the circles design is a trademark of Mastercard International Incorporated. WebBank, Member FDIC © 2020.',
            hidden: false,
            align: 'left'
        },
        {
            titleHtml: '',
            textHtml: `
            <p>1If applicant has been living in the US for more than one year at time of application, SSN must be provided and application review will include a credit check. <a href="https://www.creditstacks.com/faq?inquiry">Learn more</a>.</p>
            <p>2SSN is required within 60 days of card activation. Card can only be activated from within the US. Applicants who have been living in the US for one year or more must provide SSN at time of application and undergo a credit check. <a href="https://www.creditstacks.com/faq?inquiry">Learn more</a>.</p>
            <p>3Review the CreditStacks <a href="https://creditstacks.box.com/s/tfuosmw0glk6axlgxic2lyg5o4mgd2tx">fee schedule</a>.</p>`,
            hidden: false,
            align: 'left'
        },
        {
            titleHtml: '',
            textHtml: '© 2020 CreditStacks. All rights reserved.',
            hidden: false,
            align: 'right'
        }
    ]
}