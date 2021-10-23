type Org = string;

type ProdDomain<O extends Org> = `www.${O}.some-service.com`;
type StageDomain<O extends Org> = `www.${O}.some-service-stage.com`;

type ProdDomainToStageDomain = <D extends string>(prodDomain: D) => unknown;

const prodDomainToStageDomain: ProdDomainToStageDomain = (prodDomain) => {};

const googleProdDomain = "www.google.some-service.com";
const appleProdDomain = "www.apple.some-service.com";
const facebookProdDomain = "www.facebook.some-service.com";

const googleStageDomain = prodDomainToStageDomain(googleProdDomain); // 'www.google.some-service-stage.com';
const appleStageDomain = prodDomainToStageDomain(appleProdDomain); // 'www.apple.some-service-stage.com';
const facebookStageDomain = prodDomainToStageDomain(facebookProdDomain); // 'www.facebook.some-service-stage.com';
