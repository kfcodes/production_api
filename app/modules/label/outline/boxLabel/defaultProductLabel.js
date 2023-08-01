const productLabel = () => {
  return new Promise((resolve, reject) => {
    let product = `
      ^FX BOX LABELS WITH PRODUCT INFORMATION
      ^XA^CFD
      ^FWR
      ^LH2,20

      ^FX The product details that will be stored in the DB
      ^FO650,110^A0,40^FDSKU:^FS
      ^FO600,20^A0,40^FDPRODUCT:^FS
      ^FO550,20^A0,40^FDFLAVOUR:^FS
      ^FO500,110^A0,40^FDQTY:^FS
      ^FO450,100^A0,40^FDSIZE:^FS

      ^FX The details for each product that will be entered by the user
      ^FO400,110^A0,40^FDLOT:^FS
      ^FO350,110^A0,40^FDBBE:^FS
      ^FO300,60^A0,40^FDBATCH:^FS
      `;
    resolve(product);
  });
};
module.exports = productLabel;
