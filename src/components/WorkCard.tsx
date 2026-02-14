'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { BsGithub } from 'react-icons/bs'
import { IoLinkOutline } from 'react-icons/io5'
import { WorkFields } from '../types'
import Tooltip from './Tooltip'

interface Props {
    work: WorkFields
}

const WorkCard = ({ work }: Props) => {
    const { title, description, stackIcons, thumbnail, webUrl, repoUrl } = work

    const t = useTranslations()

    return (
        <div className="isolate h-full">
            <div
                className="relative border-[3px] bg-gray-300 dark:bg-gray-900 border-gray-800 text-gray-800 dark:text-gray-200 dark:border-sky-400 h-full
                after:w-full after:h-full after:absolute after:left-3 after:top-3 after:bg-gray-300 after:dark:border-sky-400 after:dark:bg-gray-900 after:-z-10  after:border-gray-800 after:border-[3px] hover:after:left-4 hover:after:top-4 after:transition-all after:ease-linear !important"
            >
                <div className="flex flex-col p-4 h-full">
                    {/* Title */}
                    <h3 className="text-3xl font-semibold mb-6 pb-2 truncate relative after:bg-sky-500 dark:after:bg-sky-400 after:w-full after:h-[3px] after:absolute after:bottom-0 after:left-0">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg mb-4 break-words min-h-[90px]">{description}</p>

                    {/* THUMBNAIL */}
                    <div
                        className={`relative outline-gray-800 dark:outline-sky-400 outline-double outline-4 outline-offset-3 ${
                            !repoUrl && !webUrl ? 'mb-8' : 'mb-4'
                        }`}
                    >
                        <Image
                            src={`https:${thumbnail.fields.file.url}`}
                            alt={thumbnail.fields.title}
                            width={600}
                            height={360}
                            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </div>
                    {/* LINKS CODE - WEB */}
                    {(repoUrl || webUrl) && (
                        <div className="flex items-center gap-5 self-end">
                            {/* REPO */}
                            {repoUrl && (
                                <Tooltip tooltipText={t('work.go_repo')} orientation="top">
                                    <div className="text-gray-800 dark:text-sky-400">
                                        <a
                                            href={repoUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={t('work.go_repo')}
                                        >
                                            <BsGithub size={25} />
                                        </a>
                                    </div>
                                </Tooltip>
                            )}

                            {/* WEBSITE */}
                            {webUrl && (
                                <Tooltip tooltipText={t('work.go_website')} orientation="top">
                                    <div className="text-gray-800 dark:text-sky-400">
                                        <a
                                            href={webUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={t('work.go_website')}
                                        >
                                            <IoLinkOutline size={28} />
                                        </a>
                                    </div>
                                </Tooltip>
                            )}
                        </div>
                    )}

                    {/* STACK */}
                    <div className="flex items-center gap-5 mt-auto">
                        {stackIcons.map((icon) => {
                            return (
                                <Image
                                    src={`https:${icon.fields.file.url}`}
                                    width={40}
                                    height={40}
                                    alt={icon.fields.title}
                                    title={icon.fields.title}
                                    key={icon.fields.title}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WorkCard
