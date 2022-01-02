import React, { useContext } from 'react';
import Context from './Context';
import { FcApproval } from "react-icons/fc";
import { BiColorFill } from 'react-icons/bi';
import { CopyToClipboard } from "react-copy-to-clipboard";


const Brands = (brand) => {

    const { brand: data } = brand;

    function getContrast50(hexcolor) {
        return (parseInt(hexcolor, 16) > 0xffffff / 2) ? 'black' : 'white';
    }

    const { setSelected, selected, isCopied, setIsCopied, text, setText } = useContext(Context);

    function SelectedToggle() {
        if (selected.includes(data.slug)) {
            setSelected(selected.filter(slug => slug !== data.slug))
        }
        else {
            setSelected([...selected, data.slug])
        }

    }
    const onCopyText = (colors) => {
        setIsCopied(true);
        setText(colors);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    }
    return (
        < article className={`brand ${selected.includes(data.slug) ? 'selected' : ''}`} >
            <main className="brand-body">
                <h1 onClick={SelectedToggle}>{data.title}</h1>
                <ul>
                    {data.colors.map((colors, index) => (

                        <CopyToClipboard text={`#${colors}`} onCopy={() => onCopyText(colors)} key={index} className={`${selected.includes(data.slug) ? 'selected-brand' : ''}`} style={{
                            backgroundColor: `#${colors}`, color: getContrast50(`${colors}`)
                        }}>

                            <li><BiColorFill className="icon" size={25} />{colors}</li>
                        </CopyToClipboard>
                    ))}
                </ul>
            </main>
            <footer className={`${selected.includes(data.slug) ? 'footer' : 'hidden'}`}><FcApproval />
                <p>Updated</p>
                <p>{data.modified}</p>
                <ul>
                    <li><a href={data.brand_url}>Brand URL</a></li>
                    <li><a href={data.source_url}>Source URL</a></li>
                    <li><a>Permalink</a></li>
                </ul>
            </footer>
        </article >

    )
}

export default Brands
