/**
 * Here are the styles imported.
 * Usage: <div className={s.myCustomClass} />
 */
import { PhoneIcon, GoogleIcon, FacebookIcon, PhoneStarIcon } from "../Icons";
import s from "./s.module.css";

export function Header() {
  // TODO: Replace null with the HTML code for the header
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.leftContainer}>
          <Logo className={s.logo} />
        </div>
        <div className={s.rightContainer}>
          <a className={s.mail} href="mailto: mrlock247@gmail.com">
            mrlock247@gmail.com{" "}
          </a>
          <a
            className={s.facebookLink}
            href="https://www.facebook.com/mrlock247"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            className={s.googleLink}
            href="https://goo.gl/maps/oUnmAauoDc2QTeoy7"
            target="_blank"
            rel="noreferrer"
          >
            <GoogleIcon />
          </a>
          <a className={s.whatsappLink} href="https://wa.me/447979374288">
            <PhoneIcon />
          </a>
          <a className={s.phoneLink}>
            <span>
              <PhoneIcon />
              +44 7979 374288
            </span>
            <span>Call us</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Logo({ style = {}, ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 83 50"
      style={{ width: 83, height: 50, ...style }}
      {...rest}
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M21.7669.134288c-.8501.109081-4.3931.532379-7.8733.940222-6.04539.70881-6.40001.77637-7.94923 1.51455C3.11267 3.93822.861264 6.70368.261758 9.56916-.137029 11.4754-.0601861 27.0288.356929 28.8242.99066 31.5524 3.22683 34.1416 6.1177 35.4943c1.30766.6119 2.01867.7494 6.7884 1.313 2.9302.346 6.073.6668 6.9839.7125.9108.046 2.1765.203 2.8125.3487 2.4152.554 5.6903-.4823 7.2981-2.3088 1.1142-1.2657 1.3716-2.2112 1.3716-5.0363V28.189l.9385-.1142c.516-.0627 2.0315-.1676 3.3674-.2327 7.5125-.3675 10.8485-.6417 11.3166-.9301.2855-.1758.4969-.5249.4969-.8205 0-.4823-.1078-.5238-1.7113-.659-.9411-.0794-3.6987-.5602-6.1276-1.0682-3.8081-.7965-4.7963-.9244-7.1764-.9277-3.0006-.0042-3.5014.1292-5.2434 1.3956-.5158.3747-1.2361 1.0934-1.6009 1.5971-.3648.5035-.6607.7764-.6574.6063.0129-.6597 1.3046-3.3088 2.068-4.2402.87-1.0619 2.922-2.2119 4.4401-2.4888.4857-.0885 1.8769-.5759 3.0913-1.0831 6.9609-2.907 12.0052-4.0916 17.4822-4.1055 2.5948-.0064 2.8105.0284 4.5447.7384 1.0014.4098 2.8916 1.4085 4.2006 2.2193 2.2715 1.4075 2.4422 1.4744 3.7595 1.4744.759 0 2.2221.1075 3.251.2391 1.0292.1314 2.1693.275 2.5336.3187 1.8303.2199 5.0882 1.4648 7.0479 2.6934.834.5229 1.167.6269 1.4353.4481.6863-.4569 3.8834-4.1122 3.9444-4.5092.0406-.2648-.6836-1.1419-2.0977-2.54l-2.1598-2.1357-9.9366-.2575c-5.4651-.1415-12.4207-.3233-15.4568-.4037l-5.5203-.1464-.0672-.9212c-.0368-.5067-.1963-1.0285-.3544-1.1597-.2884-.2396-2.9452-.4597-10.9503-.9082-2.3682-.1327-4.4299-.2813-4.5818-.33032-.1981-.06404-.2761-.75496-.2761-2.4444 0-3.03352-.2671-3.89137-1.6514-5.30391C27.9375.369674 25.2794-.317053 21.7669.134288ZM8.25451 8.51522c.31289.24599.62666.62998.69754.85344.07088.22325-.0722 1.65984-.31819 3.19234-.61143 3.8114-.61143 9.0628 0 12.8742.24599 1.5324.38907 2.969.31819 3.1923-.19453.6132-1.18885 1.3008-1.88088 1.3008-1.68457 0-2.07276-.8515-2.39272-5.2487-.30892-4.2465-.31024-7.3727-.00508-11.4851.24002-3.23296.51052-4.25311 1.28425-4.84356.54121-.41314 1.66492-.33276 2.29689.16428ZM47.4916 16.7915c-2.4667.6013-4.6371 1.9155-4.6371 2.8078 0 .2372-.1645.3924-.4158.3924-.5322 0-.7927 1.0778-.3058 1.2648.7273.2789 7.9865-.1786 12.8663-.8112 2.854-.3701 5.5119-.6731 5.9067-.6735.3948-.0004.7176-.0848.7176-.1872 0-.2911-4.5977-2.4014-6.0635-2.7832-1.6368-.4261-6.3368-.4319-8.0684-.0099ZM3.9915 44.7088v3.9885h1.32488v-5.1548l1.04886 1.736c.57698.9548 1.16478 1.7725 1.30654 1.8169.14177.0446.72118-.7694 1.28756-1.8083.56638-1.0391 1.05216-1.8892 1.07936-1.8892.0271 0 .0068 1.1923-.0453 2.6497l-.0945 2.6497h1.6002v-7.9772l-.6977.0693c-.6302.0625-.80667.2665-1.82175 2.1079-.61805 1.1213-1.17361 2.0367-1.23434 2.0341-.06072-.0027-.62224-.9201-1.24759-2.0388-1.01617-1.8175-1.21005-2.0414-1.8217-2.1032l-.68452-.0693v3.9887Zm9.2138-3.8075c-.3588.0934-.3866.4198-.3312 3.8939l.0603 3.7917.7176.0692.7177.0693v-1.6702c0-1.5155.0404-1.67.4359-1.67.3144 0 .6891.4612 1.3449 1.6561.8934 1.6282.9235 1.656 1.7816 1.656h.8724l-.5975-1.0488c-.3286-.577-.8137-1.347-1.078-1.7113l-.4805-.6624.6189-.507c1.2063-.9877 1.0705-2.902-.2564-3.6134-.7236-.388-2.7659-.524-3.8057-.2531Zm12.205 3.8214v3.9746h4.8579v-1.3248h-3.533v-6.6244h-1.3249v3.9746Zm6.1903-3.6003c-1.035.539-1.5833 1.5737-1.7171 3.2411-.1307 1.6276.4213 3.175 1.3492 3.7831 1.3922.9122 3.5054.5881 4.4776-.6865 1.2322-1.6154.8362-5.1771-.6865-6.175-.866-.5673-2.4976-.645-3.4232-.1627Zm8.0837-.159c-1.4649.4661-2.2103 1.7338-2.2103 3.7593 0 2.3038.9541 3.5929 2.8725 3.8806 1.4271.2139 2.3976-.1089 2.3976-.7974 0-.5182-.0546-.5403-1.1562-.4685-1.0407.0678-1.2226.0088-1.8217-.5903-.3661-.3661-.6779-.9216-.6931-1.2345-.0888-1.8281.0011-2.2488.6096-2.8576.4812-.4809.7835-.582 1.7409-.582 1.0089 0 1.175-.063 1.286-.4871.07-.2681.0815-.5331.0254-.5892-.2042-.2042-2.4369-.2285-3.0507-.0333Zm4.2743 3.7593v3.9746h1.5456v-1.656c0-.9109.0941-1.6561.2091-1.6561.1151 0 .7296.7452 1.3656 1.6561 1.0959 1.5695 1.2001 1.656 1.999 1.656.4635 0 .8426-.0589.8426-.1311 0-.3054-2.7028-3.8441-2.9408-3.8505-.157-.0042-.123-.1142.085-.2761.1904-.1479.8641-1.0391 1.4973-1.9802l1.1511-1.7113h-.8627c-.8413 0-.889.0435-1.9383 1.7665-.5915.9716-1.1504 1.7665-1.2418 1.7665-.0912 0-.1661-.7949-.1661-1.7665v-1.7665h-1.5456v3.9746Zm10.6539-3.5732c-.6852.3655-.7021.4054-.3734.8749.273.3897.4306.4458.7585.2703.5616-.3006 1.4013-.2794 1.7239.0433.6761.6761.0013 2.3242-1.8283 4.4659-1.5205 1.7797-1.4413 1.8934 1.3204 1.8934h2.3186v-1.3248H55.848l.7889-.9217c1.4057-1.6424 2.0061-3.4774 1.5373-4.6991-.3623-.944-2.3052-1.2723-3.5617-.6022Zm6.8167 2.0827c-.9848 1.3664-1.791 2.7076-1.7916 2.981-.0014.4739.0801.4968 1.7651.4968h1.7665v1.0083c0 .9698.0232 1.0058.6073.9384.5672-.0651.6032-.1316.548-1.0082-.0574-.9098-.0388-.9385.6073-.9385.5897 0 .6664-.0744.6664-.6478 0-.5423-.0987-.6592-.6073-.7177-.6041-.0693-.6072-.0788-.6268-1.8362-.0307-2.7787-.0268-2.7602-.6174-2.7602-.4178 0-.8972.5138-2.3175 2.4841Zm7.7203-1.5448c-.2239.5156-1.1151 2.5213-1.9805 4.4567-1.1753 2.6288-1.5033 3.5637-1.2961 3.6953.5787.3674.8708.1444 1.4224-1.0868.3127-.6985 1.19-2.675 1.9491-4.3927l1.3808-3.1229-.5346-.2434c-.4982-.2269-.562-.1799-.9411.6938Zm1.969-.2769v.6625h3.2649l-1.3012 3.1114c-.7157 1.7113-1.3013 3.2018-1.3013 3.3122 0 .1104.2774.2007.6163.2007.5889 0 .6819-.1594 2.0873-3.5882.8091-1.9734 1.536-3.7622 1.6155-3.9746.1323-.3542-.0698-.3864-2.4186-.3864h-2.5629v.6624Zm-54.8876 1.0094c.7598.76.0956 1.8612-1.1226 1.8612h-.7386V42.073h.7572c.4162 0 .913.1561 1.104.3469Zm17.7825-.1307c.2221.1187.5136.531.6478.9161.4982 1.4293.1553 3.5213-.6478 3.951-1.5954.8539-2.9008-.815-2.5369-3.2426.2347-1.5645 1.3337-2.2684 2.5369-1.6245Zm29.0662 2.7899c-.0731.1908-.4525.3061-1.0063.3061h-.8892l.9374-1.2147.9373-1.2145.0691.9087c.038.4996.0164 1.0462-.0483 1.2144ZM19.678 47.2515c-.5867.7068.2749 1.7925 1.04 1.3107.7645-.4816.4922-1.6314-.3864-1.6314-.2131 0-.5072.1442-.6536.3207Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
