import React, { useState, useEffect, useContext } from 'react';
import { MdDownload, MdOutlineLink, MdOutlineClose } from "react-icons/md";
import Context from './Context';
import { Link } from 'react-router-dom'

const Toolbar = () => {

    const [fileSelect, setFileSelect] = useState('css');
    const [download, setDownload] = useState();
    const [filedownloadlink, setFiledownloadlink] = useState("")
    const { selected, setSelected, colors } = useContext(Context);
    useEffect(() => {
        if (selected.length > 0) {
            let output = ':root{\n';
            switch (fileSelect) {
                case 'css':
                    selected.map((slug) => {
                        let brand = colors.find(color => color.slug === slug);
                        return (
                            brand.colors.map((color, index) => {
                                output += `\n--${slug}-${index}:#${color};\n`;
                            })

                        )
                    })
                    break;
                case 'scss':
                    selected.map((slug) => {
                        let brand = colors.find(color => color.slug === slug);
                        return (
                            brand.colors.map((color, index) => {
                                output += `\n$${slug}-${index}:#${color};\n`;
                            })
                        )
                    })
                    break;
                case 'less':
                    selected.map((slug) => {
                        let brand = colors.find(color => color.slug === slug);
                        return (
                            brand.colors.map((color, index) => {
                                output += `\n@${slug}-${index}:#${color};\n`;
                            })

                        )
                    })
                    break;
                default: return '';
            }
            output += '}';
            const blob = new Blob([output]);
            const url = URL.createObjectURL(blob);
            setDownload(url);
            return () => {
                URL.revokeObjectURL(url)
                setDownload('');

            }
        }

    }, [selected, fileSelect])


    useEffect(() => {
        let newOutput = ""
        colors.map((data) => {
            data.colors.map((color, index) => {
                newOutput += `\n--${data.slug}-${index + 1}:#${color};\n`;
            })
        })

        const blob = new Blob([newOutput]);
        const fileDownloadUrl = URL.createObjectURL(blob);
        setFiledownloadlink(fileDownloadUrl);
        return () => {
            URL.revokeObjectURL(fileDownloadUrl);
            setFiledownloadlink({ fileDownloadUrl: "" })
        }

    }, [])
    return (
        <div className="Toolbar">
            <div className="Toolbar-left">

                <select className="select-icon" onChange={(e) => setFileSelect(e.target.value)}>
                    <option value="css">CSS</option>
                    <option value="scss">SCSS</option>
                    <option value="less">LESS</option>
                </select>

                <a download={`Colors.${fileSelect}`} href={download}><MdDownload /></a>
                <Link to={`/c/${selected.join(',')}`}><MdOutlineLink /></Link>
                <MdOutlineClose onClick={() => setSelected([])} />
                <p>{selected.length !== 0 ? `${selected.length} Brands Collected` : ''}
                </p>
            </div>
            <div className="Toolbar-right">
                <a download={'Allcolors.txt'} href={filedownloadlink} ><MdDownload /></a><p>All Brands</p>
            </div>
        </div >
    )
}

export default Toolbar
