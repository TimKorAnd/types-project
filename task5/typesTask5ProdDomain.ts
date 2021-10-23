type Org = string;

type ProdDomain<O extends Org> = `www.${O}.some-service.com`;
type StageDomain<O extends Org> = `www.${O}.some-service-stage.com`;

type ProdDomainToStageDomain1 = <O extends string>(
  prodDomain: ProdDomain<O>
) => StageDomain<O>;
type ProdDomainToStageDomain2 = <D extends string>(
  prodDomain: D
) => D extends ProdDomain<infer O> ? StageDomain<O> : never;

declare const prodDomainToStageDomain: ProdDomainToStageDomain2;

const googleProdDomain = "www.google.some-service.com";
const appleProdDomain = "www.apple.some-service.com";
const facebookProdDomain = "www.facebook.some-service.com";

const googleStageDomain = prodDomainToStageDomain(googleProdDomain); // 'www.google.some-service-stage.com';
const appleStageDomain = prodDomainToStageDomain(appleProdDomain); // 'www.apple.some-service-stage.com';
const facebookStageDomain = prodDomainToStageDomain(facebookProdDomain); // 'www.facebook.some-service-stage.com';
const facebookStageDomaina = prodDomainToStageDomain("a"); // 'www.facebook.some-service-stage.com';
