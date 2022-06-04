import contract from "@truffle/contract";

export const Contract = async (name, provider) => {
  const res = await fetch(`/contacts/${name}.json`);
  const artifact = await res.json();
  const _contract = contract(artifact);
  _contract.setProvider(provider);
  const _deployed = await _contract.deployed();
  return _deployed;
};
