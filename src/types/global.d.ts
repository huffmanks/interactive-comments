export {}

declare global {
    interface IComment {
        id: number
        content: string
        createdAt: string
        score: number
        user: string
        replies?: IReply[]
    }

    interface IReply extends IComment {
        replyingTo: string
    }

    interface IStyles {
        [key: string]: string
    }

    interface INestedStyles {
        [key: string]: {
            [key: string]: string
        }
    }
}
