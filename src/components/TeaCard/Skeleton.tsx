import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="content-items"
    speed={2}
    width={190}
    height={385}
    viewBox="0 0 190 385"
    backgroundColor="#e0e0e0"
    foregroundColor="#ffffff"
  >
    <circle cx="92" cy="92" r="92" />
    <rect x="43" y="195" rx="9" ry="9" width="92" height="19" />
    <rect x="59" y="217" rx="9" ry="9" width="61" height="27" />
    <rect x="91" y="305" rx="9" ry="9" width="51" height="25" />
    <rect x="38" y="305" rx="9" ry="9" width="50" height="25" />
    <rect x="46" y="335" rx="9" ry="9" width="88" height="26" />
    <rect x="42" y="248" rx="9" ry="9" width="92" height="19" />
    <rect x="52" y="270" rx="9" ry="9" width="74" height="16" />
    <rect x="61" y="289" rx="9" ry="9" width="57" height="14" />
  </ContentLoader>
);

export default Skeleton;
